using Microsoft.Extensions.DependencyInjection;
using StatiqHelpers.CustomExtensions;
using StatiqHelpers.Pipelines;

namespace ankursheel_website
{
    internal class Program
    {
        public static async Task<int> Main(string[] args)
            => await Bootstrapper.Factory.CreateBootstrapper(args)
                .AddSetting(WebKeys.OutputPath, "../../output")
                .AddSetting(WebKeys.CachePath, "../../cache")
                .AddSetting(
                    WebKeys.InputPaths,
                    new[]
                    {
                        "input",
                        "content"
                    })
                .ConfigureServices(
                    services =>
                    {
                        services.AddSingleton(new PostListOptions(document => document.GetLastUpdatedDate(), true));
                    })
                .RunAsync();
    }
}
