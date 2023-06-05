package com.alunoOnline.avaliacao.controller;


import com.alunoOnline.avaliacao.model.Aluno;
import com.alunoOnline.avaliacao.model.Professor;
import com.alunoOnline.avaliacao.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/professor")
public class ProfessorController {

    @Autowired
    ProfessorService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Professor> create(@RequestBody Professor professor){
        Professor professorCreated = service.create(professor);
        return ResponseEntity.status(201).body(professorCreated);
    }


    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Professor> findById(@PathVariable Long id){
        return service.findById(id);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Professor> findAll(){
        return service.findAll();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        service.deleteById(id);
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Professor> update(@PathVariable Long id, @RequestBody Professor professor) {
        Optional<Professor> professorOptional = service.findById(id);

        if (professorOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Professor professorExistente = professorOptional.get();

        if (professor.getNome() != null) {
            professorExistente.setNome(professor.getNome());
        }
        if (professor.getEmail() != null) {
            professorExistente.setEmail(professor.getEmail());
        }

        Professor professorAtualizado = service.update(professorExistente);
        return ResponseEntity.status(202).body(professorAtualizado);
    }
}