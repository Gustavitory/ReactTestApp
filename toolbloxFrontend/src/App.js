import './App.css';
import { PanelSelectFile } from './components/molecules/panelSelectFile/PanelSelectFile';
import { Header } from './components/atoms/header/Header';
import { TableLines } from './components/organisms/table/Table';
import { usePrechargeData } from './hooks/usePrechargeData';

function App() {
  // const {files,lines,selected}=useSelector(state=>state.filesReducer);
  const {files,lines,selected}=usePrechargeData();
  return (
    <div>
      <Header/>
      <PanelSelectFile files={files} />
      <hr className='no-space'/>
      {
        !selected?
          <div className='noSelection'><p>Selecciona un archivo</p></div>
          :
          <TableLines data={lines}/>
      }
    </div>
  );
}

export default App;
