using System.Threading.Tasks;

namespace ProEventos.Persistence.Contratos
{
    public interface IGeralPersistence
    {
        // Geral
        // Toda e qualquer operação no banco será feita utilizando esses métodos
        // As unicas operações que não iram passar por aqui serão as com base no Select.
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteRange<T>(T[] entity) where T : class;
        Task<bool> SaveChangeAsync();
    }
}