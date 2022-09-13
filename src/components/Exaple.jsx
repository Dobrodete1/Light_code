import React from 'react';
const data = [
    {
      id: 'user-1',
      fio: 'Leanne Graham',
      birthday: '23.06.1998',
      address: 'Hello world 4/2',
      phone: '+996 700 866 222',
      salary: "$3000",
      favoriteColor: 'red',
      hobby: 'movie',
    }, {
      id: 'user-2',
      fio: 'Ervin Howell',
      birthday: '23.06.1998',
      address: 'Hello world 4/2',
      phone: '+996 700 866 222',
      salary: "200$",
      favoriteColor: 'black',
      hobby: 'movie',
    }, {
      id: 'user-3',
      fio: 'Clementine Bauch',
      birthday: '23.06.1998',
      address: 'Hello world 4/2',
      phone: '+996 700 866 222',
      salary: "50000c",
      favoriteColor: 'brown',
      hobby: 'movie',
    }, {
      id: 'user-4',
      fio: 'Patricia Lebsack',
      birthday: '23.06.1998',
      address: 'Hello world 4/2',
      phone: '+996 700 866 222',
      salary: "$1000",
      favoriteColor: 'gray',
      hobby: 'movie',
    }, {
      id: 'user-5',
      fio: 'Chelsey Dietrich',
      birthday: '23.06.1998',
      address: 'Hello world 4/2',
      phone: '+996 700 866 222',
      salary: "1200$",
      favoriteColor: 'yellow',
      hobby: 'movie',
    },
]
const columns = [
    {
      id: 0,
      key: 'fio',
    },
  ]
const Exaple = () => {
    return (
      <div>
        <h1>Example</h1>
        <Table
          data={data}
          columns={columns}
          fields={[
            {
              key: 'id',
              title: 'ID',
            },
            {
              key: 'fio',
              title: 'FIO',
            },
            {
              key: 'birthday',
              title: 'Birthday'
            },
            {
              key: 'address',
              title: 'Address'
            },
            {
              key: 'phone',
              title: 'Phone'
            },
            {
              key: 'salary',
              title: 'Salary'
            },
            {
              key: 'favoriteColor',
              title: 'Favorite Color'
            },
            {
              key: 'hobby',
              title: 'Hobby'
            },
          ]}
        />
      </div>
    )
  }
  const Table = ({
    data = [],
    columns = [],
    fields = []
  }) => {
    const [dynamicColumns, setDynamicColumns] = React.useState(columns);
    const handleColChange = (key, colId) => {
      setDynamicColumns(prev => {
        return prev.map(item => item.id === colId ? { ...item, key } : item);
      })
    }
    return (
        <table>
          <thead>
            <tr>
              {dynamicColumns.map(col => (
                <th key={col.id}>
                  <select onChange={() => handleColChange(field.key, col.id)} value={col.key}>
                    {fields.map(field => (
                      <option value={field.key} key={field.key}>{field.title}</option>
                    ))}
                  </select>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                {dynamicColumns.map(col => (
                  <td key={col.id}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
export default Exaple;