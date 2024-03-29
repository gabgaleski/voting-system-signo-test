import { useEffect, useRef, useState } from 'react'
import './App.css'
import { requestData, requestDelete, requestPost, requestPut } from './API/request';
import { getDate } from './helper/helperDate';

function App() {
  const [votings, setVotings] = useState([]);
  const [options, setOptions] = useState([]);
  const [inputOptions, setInputOptions] = useState('');
  const initialDateCreate = useRef(null);
  const finalDateCreate = useRef(null);
  const title = useRef(null);

  const getVotings = async () => {
    try {
      const response = await requestData('/voting');
      setVotings(response.data);
    } catch (error) {
      return console.log(error);
    }
  }

  const stateVoteing = (initialDate, finalDate) => {
    const currentDate = new Date();
    const formatedInitial = new Date(initialDate)
    const formatedFinal = new Date(finalDate)

    if (currentDate < formatedInitial) return 'Votação não iniciada';

    if (currentDate > formatedFinal) return 'Votação encerrada';

    return 'Em andamento'
  }

  const vote = async (optionId, newVote) => {
    try {
      const voteUrl = `/voting/${optionId}`
      await requestPut(voteUrl, newVote)
      getVotings()
    } catch (error) {
      console.log(error)
    }
  }

  const createOptions = () => {
    if (inputOptions === '') return alert('Campo de opção não pode ser vazio');
    setOptions((prev) => [...prev, { value: inputOptions }])
    setInputOptions('')
  }

  const resetInputs = () => {
    title.current.value = '';
    initialDateCreate.current.value = '';
    finalDateCreate.current.value = '';
    setOptions([]);
    getVotings();
  }

  const createVoting = async () => {
    const initialDateVoting = new Date(initialDateCreate.current.value);
    const finalDateVoting = new Date(finalDateCreate.current.value);
    const currentDate = new Date();
    const isValidDate = initialDateVoting <= finalDateVoting && initialDateVoting >= currentDate;
    console.log(isValidDate)

    if (title.current.value === '') return alert('Título da votação não pode ser vazio');
    if (!isValidDate) return alert('Data de inicio e fim da votação inválida')
    if (options.length < 3) return alert('É necessário no mínimo 3 opções para votação');

    const newVoting = {
      title: title.current.value,
      initialDate: initialDateVoting,
      finalDate: finalDateVoting,
      options,
    }

    try {
      await requestPost('/voting', newVoting);
      resetInputs();
      return alert('Votação criada com sucesso');
    } catch (error) {
      return console.log(error)
    }

  }

  const deleteVoting = async (votingId) => {
    try {
      await requestDelete(`/voting/${votingId}`);
      getVotings();
      alert('Votação deletada com sucesso')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getVotings();
  }, [])

  return (
    <section>
      <header>
        <h1>Sistema de Votação</h1>
      </header>
      <section className='container'>
        <form className='form-container'>
          <h2>Criar Votação</h2>
          <div className='inputs-container'>
            <label className='label-title' htmlFor='title'>Título:</label>
            <input
              className='input-forms'
              type='text'
              id='title'
              placeholder='Ex: Qual seu animal favorito?'
              ref={title} maxLength='155'
            />
            <label className='label-title' htmlFor='initialDate'>Data de Início:</label>
            <input
              className='input-forms'
              type='datetime-local'
              id='initialDate'
              ref={initialDateCreate}
            />
            <label className='label-title' htmlFor='finalDate'>Data de Fim:</label>
            <input
              className='input-forms'
              type='datetime-local'
              id='finalDate'
              ref={finalDateCreate}
            />
            <p className='label-title'>Adicionar opções para votar:</p>
            <input
              className='input-forms'
              type='text'
              id='options'
              placeholder='Ex: Cachorro'
              name='inputOptions'
              maxLength='155'
              onChange={(e) => setInputOptions(e.target.value)}
              value={inputOptions}
            />
            <span className='warning'>Coloque no minimo 3 opções</span>
            <button className='add-button' type='button' onClick={createOptions} >Adicionar</button>
            {
              options.map((option, index) => {
                return (
                  <div key={index}>
                    <p>{option.value}</p>
                  </div>
                )
              })
            }
          </div>
          <button
            className='button-create'
            type='button'
            onClick={createVoting}>Criar Votação</button>
        </form>

        <div>
          <h2>Lista de Votações</h2>
          {
            votings.map((voting) => {
              const initialDate = getDate(voting.initialDate)
              const finalDate = getDate(voting.finalDate)
              const status = stateVoteing(voting.initialDate, voting.finalDate);
              return (
                <div key={voting.id}>
                  <h3>{voting.title}</h3>
                  <p>Inicio da votação:</p>
                  <input type='datetime-local' defaultValue={initialDate} disabled />
                  <p>Fim da votação:</p>
                  <input type='datetime-local' defaultValue={finalDate} disabled />
                  <p>Status: {status}</p>
                  <button onClick={() => deleteVoting(voting.id)}>Deletar Votação</button>
                  {voting.options.map((option) => {
                    const newVote = { votes: option.votes + 1 }; // body esperado no backend
                    return (
                      <div key={option.id}>
                        <h4>{option.value}</h4>
                        <p>{option.votes}</p>
                        <button
                          disabled={status !== 'Em andamento'}
                          onClick={() => vote(option.id, newVote)}
                        >Votar</button>
                      </div>
                    )
                  })}
                </div>
              )
            })
          }
        </div>
      </section>
    </section>
  )
}

export default App
