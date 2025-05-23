using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using ProEventos.Aplication;
using ProEventos.Aplication.Contratos;
using ProEventos.Persistence;
using ProEventos.Persistence.Contexts;
using ProEventos.Persistence.Contratos;
using System;
using AutoMapper;

namespace ProEventos.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ProEventosContext>(
                context => context.UseSqlite(Configuration.GetConnectionString("Default"))
            );
            services.AddControllers()
                    .AddNewtonsoftJson(x => x.SerializerSettings.ReferenceLoopHandling =
                        Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            // Com a referencia acima adiconada � possivel dizer para o ef ignorar a possibilidade de looping.

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddScoped<IEventoService, EventoService>();
            services.AddScoped<IGeralPersistence, GeralPersistence>();
            services.AddScoped<IEventoPersistence, EventoPersistence>();
            services.AddCors();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProEventos.Api", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProEventos.Api v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
