import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import image from '../assets/download.jpeg'


export default function BasicTable() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className='table-container'>
      <div className='table-info'>
      <p>Product sale</p>
      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <SearchIcon sx={{ ml: 1, mr: 1 }} />
        <InputBase
          placeholder="Search Dessert"
          inputProps={{ 'aria-label': 'search desserts' }}
          value={searchTerm}
          onChange={handleChange}
        />
      </Paper>
      </div>
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <div className='table-image'><img src={image} alt="" srcset="" /></div>
                  <div><p>Abstract 3d</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>
                </TableCell>
                <TableCell align="right">32 in Stock</TableCell>
                <TableCell align="right">$ 45.99</TableCell>
                <TableCell align="right">20</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <div className='table-image'><img src={image} alt="" srcset="" /></div>
                  <div><p>Abstract 3d</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>
                </TableCell>
                <TableCell align="right">32 in Stock</TableCell>
                <TableCell align="right">$ 45.99</TableCell>
                <TableCell align="right">20</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
