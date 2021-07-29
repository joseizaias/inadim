import {React, useEffect, useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import api from '../services/api';

const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'nomeCliente',
    headerName: 'Nome do Cliente',
    width: 370,
    editable: true,
  },
  {
    field: 'valor',
    headerName: 'Valor R$',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'data',
    headerName: 'Data Venc.',
    type: 'date',
    width: 170,
    editable: true,
  },
  {
    field: 'titulo',
    headerName: 'Titulo',
    width: 250,
    editable: true,
  },
];


export default function DataTableData() {
  const [cliente, setCliente] = useState([]);
    
  useEffect(() => {
    api.get('/Clientes/listaclientesPorData')
        .then ((res) => {
          setCliente(res.data)
          console.log(res)
        }) 
  }) 

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(cliente) => cliente._id}
        rows={cliente}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
