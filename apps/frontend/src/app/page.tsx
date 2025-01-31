import Pagina from '@/core/template/Pagina'

export default function Home() {
  return (
    <Pagina>
      <table className="container w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left rounded-tl-lg">
              Pendente:
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Em andamento:
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left rounded-tr-lg">
              Feito:
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 align-top">
              <p>
                <strong>Título:</strong> Tarefa 1
              </p>
              <p>
                <strong>Descrição:</strong> Descrição da Tarefa 1.
              </p>
            </td>
            <td className="border border-gray-300 px-4 py-2 align-top">
              <p>
                <strong>Título:</strong> Tarefa 2
              </p>
              <p>
                <strong>Descrição:</strong> Descrição da Tarefa 2.
              </p>
            </td>
            <td className="border border-gray-300 px-4 py-2 align-top">
              <p>
                <strong>Título:</strong> Tarefa 3
              </p>
              <p>
                <strong>Descrição:</strong> Descrição da Tarefa 3.
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 align-top">
              <p>
                <strong>Título:</strong> Tarefa 4
              </p>
              <p>
                <strong>Descrição:</strong> Descrição da Tarefa 4.
              </p>
            </td>
            <td className="border border-gray-300 px-4 py-2 align-top">
              <p>
                <strong>Título:</strong> Tarefa 5
              </p>
              <p>
                <strong>Descrição:</strong> Descrição da Tarefa 5.
              </p>
            </td>
            <td className="border border-gray-300 px-4 py-2 align-top">
              <p>
                <strong>Título:</strong> Tarefa 6
              </p>
              <p>
                <strong>Descrição:</strong> Descrição da Tarefa 6.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </Pagina>
  )
}
