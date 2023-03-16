const main_url = 'https://intership-liga.ru';

const getTasks = async () => {
	try {
		const res = await fetch(`${main_url}/tasks`);
		if(res.ok){
			const tasks = await res.json();
			console.log("Все Задачи:", tasks);
		}else{
			throw new Error('ошибка')
		}
	}catch (err) {
		console.log("Произошла ошибка при получении всех задач", err);
	}
}

const getTask = async (taskId) => {
	try{
		const res = await fetch(`${main_url}/tasks/${taskId}`);
		if(res.ok){
			const task = await res.json();
			console.log(`Задача под идентификатором ${taskId}`, task);
		}else{
			throw new Error('ошибка')
		}
	} catch (err) {
	console.log(`При получении задачи ПРОИЗОШЛА ОШИБКА`,err);
	}
}

const createTask = async (task) => {
	try {
		const res = await fetch(`${main_url}/tasks`, {
			method: 'POST',
			headers: {
				'content-Type': 'application/json'
			},
			body: JSON.stringify(task)
		});
		if(res.ok){
			const addedTask = await res.json();
			console.log('Задача успешно создана:' , addedTask);
		}else{
			throw new Error('ошибка')
		}
	} catch (err) {
		console. log('При создании задачи произошла ошибка', err);
	}
}
		
const updateTask = async (taskId,updateData) => {
	try {
		const res = await fetch(`${main_url}/tasks/${taskId}`, {
		method: 'PATCH',
		headers: {
			'content-Type': 'application/json'
		 },
		body: JSON.stringify(updateData)
	});
	if(res.ok){
		const updatedTask = await res.json();
		console.log ("Задача успешно обновлена: ", updatedTask);
	}else{
		throw new Error('ошибка')
	}
	} catch (err) {
		console.log('При обновлении задачи произошла ошибка' , err);
	}
}
const removeTask = async (taskId) => {
	try {
		const res = await fetch(`${main_url}/tasks/${taskId}`, {
			method: 'DELETE',
		});
		if(res.ok){
			console. log("Задача успешно удален");
		}else{
			throw new Error('ошибка')
		}
		}catch (err) {
			console.log( "При удалении задачи произошла ошибка", err);
		}
	}

const myTask = {
	name: 'meeting',
	info: 'Meet a friend at 19:00',
	isImportant: true,
}
	
getTasks();
getTask(10);
createTask(myTask);
updateTask(1578,{
	name:'lpl',
});
removeTask(741);
