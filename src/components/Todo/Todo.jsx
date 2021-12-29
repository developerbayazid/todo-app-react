import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import CreateTodo from '../CreateTodo/CreateTodo';
import EditTodo from '../EditTodo/EditTodo';
import NoTodoFound from '../NoTodoFound/NoTodoFound';
import './Todo.css';

const Todo = () => {
    const [editTodo, setEditTodo] = useState(null);
    const [task, setTask] = useState([
        {
            title: 'My First Todo',
            status: 'pending'
        },
        {
            title: 'My Second Todo',
            status: 'done'
        },
        {
            title: 'My Third Todo',
            status: 'pending'
        }
    ])

    const onCreateTodo = (todo) => {
        const newTodo = [todo, ...task];
        setTask(newTodo);
    }
    const onUpdateTodo = (index,todo) => {
        const newTodo = [...task];
        newTodo[index] = todo;
        setTask(newTodo);
        setEditTodo(null);
    }

    const deleteTodo = (index) => {
        let newTask = [...task];
        newTask.splice(index, 1);
        setTask(newTask);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className='text-center todo-title'>
                    My Todos
                </Card.Title>
                <CreateTodo onCreateTodo={(todo => onCreateTodo(todo))} />
                {
                    task.length  === 0 && <NoTodoFound />
                }
                <ListGroup>
                    {
                        task.map((todo , index) => {
                            return (
                                <ListGroup.Item key={index} variant={todo.status === 'pending' ? 'info' : 'warning'}>
                                    <div className="float-start">
                                        {
                                            editTodo === index ? <EditTodo onUpdateTodo={(newIndex, newTodo) => onUpdateTodo(newIndex, newTodo)} todo={todo} index={index} /> : 
                                            todo.status === 'done' ? <del>{todo.title}</del> : `${todo.title}` 
                                        }
                                    </div>
                                    <div className="float-end">
                                        <Button variant="outline-success" onClick={() => setEditTodo(index)} className='me-2'>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Button>
                                        <Button variant="outline-danger" onClick={()=> deleteTodo(index)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Todo;