package bhub.Task8.Task_8.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bhub.Task8.Task_8.model.Task8Model;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://127.0.0.1:5500")

public class Task8Controller {

	private List<Task8Model> tasks = new ArrayList<>();

	// GET all tasks
	@GetMapping
	public List<Task8Model> getTasks() {
		return tasks;
	}

	// POST add a new task
	@PostMapping
	public Task8Model addTask(@RequestBody Task8Model task) {
		tasks.add(task);
		return task;
	}

}
