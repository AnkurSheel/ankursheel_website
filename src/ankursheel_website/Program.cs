using Microsoft.Extensions.DependencyInjection;
using Statiq.App;
using Statiq.Common;
using Statiq.Web;
using StatiqHelpers.Extensions;
using StatiqHelpers.Pipelines;

namespace ankursheel_website
{
    internal class Program
    {
        public static async Task<int> Main(string[] args)
            => await Bootstrapper.Factory.InitStatiq(args)
                .AddSetting(WebKeys.OutputPath, "../../output")
                .AddSetting(WebKeys.CachePath, "../../cache")
                .ConfigureServices(
                    services =>
                    {
                        services.AddSingleton(new PostListOptions(document => document.GetLastUpdatedDate(), true));
                    })
                .RunAsync();
    }
}
