
using Microsoft.Playwright;

namespace ankursheel_website.Integration.Tests
{
    public static class PlaywrightHelpers
    {
        
        private static readonly Lazy<Task> _install = new(Playwright.CreateAsync);
        public static Task InstallAsync() => _install.Value;
    }
}
