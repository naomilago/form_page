import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="alert alert-success container mt-3 intro" role="alert">
        <h4 className="alert-heading">Olá, seja bem-vinde!</h4>
        <p>Esta é uma página desenvolvida em ReactJS. Por ser meu primeiro projeto em ReactJS, eu optei por desenvolver algo simples. Uma página de login. Isso mesmo 💖</p>
        <hr />
        <p className="mb-0"> Portanto, peço encarecidamente que não julgue pelo design, mas que observe o código fonte disponível no meu Github: <i>github.com/abnerlago</i> </p>
      </div>

      <form className='container alert-success p-4 formulario'>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder='seuemail@gmail.com' />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Senha</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder='Insira aqui sua senha' />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Endereço</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Rua do Limoeiro, 123 - Bairro do Limoeiro" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Cidade</label>
            <input type="text" className="form-control" id="inputCity" placeholder='Insira aqui sua cidade' />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Estado</label>
            <select id="inputState" className="form-control">
              <option value="">Selecione seu estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espirito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MT">Mato Grosso</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Código Postal</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" for="gridCheck">
              Eu me asseguro de ter inserido todos os dados acima de forma real e válida.
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-success">Cadastrar</button>
      </form>

    </>
  );
}

export default App;
