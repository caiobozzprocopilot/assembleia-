import { useState, useMemo } from 'react';
import { events2026, congregations } from '../data/events';
import { MagnifyingGlassIcon, CalendarIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const Agenda = () => {
  const [selectedMonth, setSelectedMonth] = useState('Todos');
  const [selectedCongregation, setSelectedCongregation] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const months = ['Todos', 'Janeiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const filteredEvents = useMemo(() => {
    return events2026.filter((event) => {
      const matchesMonth = selectedMonth === 'Todos' || event.month === selectedMonth;
      const matchesCongregation =
        selectedCongregation === 'Todas' || event.congregation === selectedCongregation;
      const matchesSearch =
        searchTerm === '' ||
        event.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.congregation.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesMonth && matchesCongregation && matchesSearch;
    });
  }, [selectedMonth, selectedCongregation, searchTerm]);

  const eventsByMonth = useMemo(() => {
    const grouped = {};
    filteredEvents.forEach((event) => {
      if (!grouped[event.month]) {
        grouped[event.month] = [];
      }
      grouped[event.month].push(event);
    });
    return grouped;
  }, [filteredEvents]);

  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Agenda do Campo 2026
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              ANO DE VOLTAR AO PRIMEIRO AMOR - CONGRESSOS e EVENTOS
            </p>
            <p className="text-gray-500 mt-2">
              Todo Campo deve se reunir, TEMPLO SEDE, Escolas de Cooperação e CONGREGAÇÕES. Devem ser feito convites.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <MagnifyingGlassIcon className="w-4 h-4 mr-1" />
                  Buscar Evento
                </label>
                <input
                  type="text"
                  placeholder="Digite para buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Month Filter */}
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  Filtrar por Mês
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition bg-white"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Congregation Filter */}
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <BuildingLibraryIcon className="w-4 h-4 mr-1" />
                  Filtrar por Congregação
                </label>
                <select
                  value={selectedCongregation}
                  onChange={(e) => setSelectedCongregation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="Todas">Todas as Congregações</option>
                  {congregations.map((cong) => (
                    <option key={cong} value={cong}>
                      {cong}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <span className="inline-block bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold">
                {filteredEvents.length} evento(s) encontrado(s)
              </span>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-8">
            {Object.keys(eventsByMonth).length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl shadow">
                <p className="text-gray-500 text-lg">
                  Nenhum evento encontrado com os filtros selecionados.
                </p>
              </div>
            ) : (
              Object.entries(eventsByMonth).map(([month, events]) => (
                <div key={month} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Month Header */}
                  <div className="bg-gradient-to-r from-brown-700 to-gold-700 px-6 py-4">
                    <h3 className="text-2xl font-bold text-white">{month}</h3>
                  </div>

                  {/* Events Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Congregação
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Dia
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Evento
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {events.map((event, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gold-50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brown-100 text-brown-800">
                                {event.congregation}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-gray-900 font-semibold">
                                {event.day}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-gray-700">{event.event}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
