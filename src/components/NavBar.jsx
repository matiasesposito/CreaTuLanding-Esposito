import { Grid, GridColumn,GridRow, Image, ButtonGroup, Button } from 'semantic-ui-react';
import CartWidget from './CartWidget';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <Grid verticalAlign='middle' columns='equal' className='NavBar'>
      <GridColumn>
        <Image src="../logo.png" className='logo' href='#'/>
      </GridColumn>
      <GridColumn verticalAlign='right' width={14}>
          <ButtonGroup basic color='blue'>
          <Button >Gamers</Button>
          <Button >Deportes y Aire Libre</Button>
          <Button >Informática</Button>
          <Button >Telefonía y Relojes</Button>
          <Button >Hogar y Electro</Button>
          </ButtonGroup>
      </GridColumn>
      <GridColumn verticalAlign='right'>
        <CartWidget />
      </GridColumn>
    </Grid>
  );
};

export default NavBar;
