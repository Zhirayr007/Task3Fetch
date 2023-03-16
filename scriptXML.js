const main_url = 'https://intership-liga.ru';

const getTasks = () => new Promise( (resolve, reject) => {
	const xhr = new XMLHttpRequest();
	xhr.open( `GET`, `${main_url}/tasks`);
	xhr.responseType='json';
	xhr.onload = () => resolve(xhr.response);
	xhr.onerror = () => reject(xhr.status);
	xhr.send();
});

const getTask = (taskId) => new Promise( (resolve, reject) => {
	const xhr = new XMLHttpRequest();
	xhr.responseType='json';
	xhr.open( `GET`, `${main_url}/tasks/${taskId}`);
	xhr.onload = () => resolve(xhr.response);
	xhr.onerror = () => reject(xhr.status)
	xhr.send();
});

const createTask = (task) => new Promise( (resolve, reject) => {
	const xhr = new XMLHttpRequest();
	xhr.responseType='json';
	xhr.open( `POST`, `${main_url}/tasks`);
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = () => resolve(xhr.response);
	xhr.onerror = () => reject(xhr.status)
	xhr.send(JSON.stringify(task));
});

const updateTask = (taskId,updateData) => new Promise( (resolve, reject) => {
	const xhr = new XMLHttpRequest();
	xhr.responseType='json';
	xhr.open( `PATCH`, `${main_url}/tasks/${taskId}`);
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.onload = () => resolve(xhr.response);
	xhr.onerror = () => reject(xhr.status)
	xhr.send(JSON.stringify(updateData));
});

const removeTask = (taskId) => new Promise( (resolve, reject) => {
	const xhr = new XMLHttpRequest();
	xhr.open( `DELETE`, `${main_url}/tasks/${taskId}`);
	xhr.onload = () => resolve(xhr.response);
	xhr.onerror = () => reject(xhr.status)
	xhr.send();
});
const myTask = {
	name: 'Physical activity',
	info: 'Run 10 laps',
	isImportant: true,
}
getTasks()
	.then((data) => console.log("Все Задачи:",data))
	.catch((error) => console.warn("Произошла ошибка при получении всех задач",error));
getTask(1578)
	.then((data) => console.log("Задача под идентификатором 1578", data))
	.catch((error) => console.warn("При получении задачи ПРОИЗОШЛА ОШИБКА",error));
createTask(myTask)
		.then((data) => console.log('Задача успешно создана:',data))
	.catch((error) => console.warn('При создании задачи произошла ошибка',error));
updateTask(1578,{
		name:'meeting',
	})
	.then((data) => console.log("Задача успешно обновлена: ",data))
	.catch((error) => console.warn('При обновлении задачи произошла ошибка' ,error));
removeTask(742)
	.then((data) => console.log("Задача успешно удалена", data))
	.catch((error) => console.warn( "При удалении задачи произошла ошибка",error));