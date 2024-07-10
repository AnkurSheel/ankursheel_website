using Microsoft.Extensions.DependencyInjection;
using StatiqHelpers.CustomExtensions;
using StatiqHelpers.Pipelines;

namespace ankursheel_website;

internal class Program
{
    public static async Task<int> Main(string[] args)
    {
        return await Bootstrapper.Factory.CreateBootstrapper(args)
            .AddSetting(WebKeys.OutputPath, "../../output")
            .AddSetting(WebKeys.CachePath, "../../cache")
            .AddSetting(WebKeys.InputPaths, new[]
            {
                "input",
                "content"
            })
            .ConfigureServices(services =>
            {
                services.AddSingleton(new PipelineOptions(documentList =>
                    documentList.OrderByDescending(document => document.GetLastUpdatedDate())
                        .ThenByDescending(document => document.GetPublishedDate())
                        .ThenBy(document => document.GetTitle())
                        .ToDocumentList()));
            })
            .RunAsync();
    }
}