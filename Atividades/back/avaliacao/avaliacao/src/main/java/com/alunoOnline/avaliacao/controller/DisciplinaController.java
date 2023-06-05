package com.alunoOnline.avaliacao.controller;

import com.alunoOnline.avaliacao.model.Aluno;
import com.alunoOnline.avaliacao.model.Disciplina;
import com.alunoOnline.avaliacao.model.Professor;
import com.alunoOnline.avaliacao.service.DisciplinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/disciplina")
public class DisciplinaController {

    @Autowired
    DisciplinaService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Disciplina> create(@RequestBody Disciplina disciplina){
        Disciplina disciplinaCreated = service.create(disciplina);
        return ResponseEntity.status(201).body(disciplinaCreated);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Disciplina> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Disciplina> findAll(){
        return service.findAll();
    }

    @GetMapping("/professor/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Disciplina> findByProfessorId(@PathVariable Long id){
        return service.findByProfessorId(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        service.deleteById(id);
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Disciplina> update(@PathVariable Long id, @RequestBody Disciplina disciplina) {
        Optional<Disciplina> disciplinaOptional = service.findById(id);

        if (disciplinaOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Disciplina disciplinaExistente = disciplinaOptional.get();

        if (disciplina.getNome() != null) {
            disciplinaExistente.setNome(disciplina.getNome());
        }
        if (disciplina.getProfessor() != null) {
            disciplinaExistente.setProfessor(disciplina.getProfessor());
        }

        Disciplina disciplinaAtualizado = service.update(disciplinaExistente);
        return ResponseEntity.status(202).body(disciplinaAtualizado);
    }
}
