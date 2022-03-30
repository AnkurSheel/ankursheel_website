using System.Net;
using System.Xml;

namespace ankursheel_website.Integration.Tests
{
    [UsesVerify]
    public class PageRenderTests : IClassFixture<TestServerFixture>
    {
        private readonly HttpClient? _httpClient;

        public PageRenderTests(TestServerFixture fixture)
        {
            _httpClient = fixture.Client;
        }

        [Theory]
        [MemberData(nameof(GetData))]
        public async Task Page_is_rendered(string path)
        {
            var settings = new VerifyTests.VerifySettings();
            settings.UseParameters(path);

            if (_httpClient == null)
            {
                Assert.False(true);
                return;
            }

            var response = await _httpClient.GetAsync(path);
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            var content = await response.Content.ReadAsStringAsync();
            await Verify(content, settings);
        }

        [Fact]
        public async Task Sitemap_is_created_correctly()
        {
            if (_httpClient == null)
            {
                Assert.False(true);
                return;
            }

            var response = await _httpClient.GetAsync("sitemap.xml");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            var content = await response.Content.ReadAsStringAsync();
            var doc = new XmlDocument();
            doc.LoadXml(content);
            await Verify(doc);
        }

        [Fact]
        public async Task Rss_feed_is_created_for_posts()
        {
            var settings = new VerifyTests.VerifySettings();
            var counter = 0;
            settings.ScrubLinesWithReplace(
                line =>
                {
                    if (counter == 0 && line.Contains("<pubDate>"))
                    {
                        counter++;
                        return "<pubDate>pubDate</pubDate>";
                    }

                    return line;
                });

            settings.ScrubLinesWithReplace(
                line => line.Contains("<lastBuildDate>")
                    ? "<lastBuildDate>lastBuildDate</lastBuildDate>"
                    : line);

            if (_httpClient == null)
            {
                Assert.False(true);
                return;
            }

            var response = await _httpClient.GetAsync("rss.xml");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
            var content = await response.Content.ReadAsStringAsync();
            var doc = new XmlDocument();
            doc.LoadXml(content);
            await Verify(doc, settings);
        }

        [Fact]
        public async Task File_are_outputted_correctly()
        {
            var outputDirectory = TestHelpers.GetOutputDirectory();
            var files = Directory.GetFiles(outputDirectory, "*", SearchOption.AllDirectories)
                .OrderBy(x => x)
                .Select(x => x.Substring(outputDirectory.Length).Replace("\\", "/").Replace("index.html", "").Replace(".html", "/"));
            await Verify(files);
        }

        public static IEnumerable<object[]> GetData()
        {
            var outputDirectory = TestHelpers.GetOutputDirectory();
            var patterns = new[]
            {
                "*.html",
                "*.js"
            };

            var filePaths = new List<string>();

            filePaths = patterns.Aggregate(
                filePaths,
                (current, pattern) => current.Concat(Directory.GetFiles(outputDirectory, pattern, SearchOption.AllDirectories)).ToList());

            filePaths = filePaths.Select(x => x.Substring(outputDirectory.Length).Replace("\\", "/")).ToList();

            return filePaths.Select(
                x => new object[]
                {
                    x
                });
        }
    }
}
