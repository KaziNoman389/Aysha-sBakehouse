using System;
using AyshasBakehouse.Areas.Identity.Data;
using AyshasBakehouse.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(AyshasBakehouse.Areas.Identity.IdentityHostingStartup))]
namespace AyshasBakehouse.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<AyshasBakehouseContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("AyshasBakehouseContextConnection")));

                services.AddDefaultIdentity<AyshasBakehouseUser>(options =>
                {
                    options.SignIn.RequireConfirmedAccount = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireUppercase = false;
                })
                
                    .AddEntityFrameworkStores<AyshasBakehouseContext>();
            });
        }
    }
}