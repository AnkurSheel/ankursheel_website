using PlaywrightSharp;

namespace ankursheel_website.Integration.Tests
{
    public static class PlaywrightHelpers
    {
        private static readonly Lazy<Task> _install = new Lazy<Task>(() => Playwright.InstallAsync());
        public static Task InstallAsync() => _install.Value;
    }
}
