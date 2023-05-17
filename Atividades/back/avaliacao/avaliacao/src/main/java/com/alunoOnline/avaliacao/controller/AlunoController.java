package com.alunoOnline.avaliacao.controller;


import com.alunoOnline.avaliacao.model.Aluno;
import com.alunoOnline.avaliacao.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    @Autowired
    AlunoService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Aluno> create(@RequestBody Aluno aluno) {
        Aluno alunoCreated = service.create(aluno);
        return ResponseEntity.status(201).body(alunoCreated);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Aluno> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Aluno> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Aluno> update(@PathVariable Long id, @RequestBody Aluno aluno) {
        Optional<Aluno> alunoOptional = service.findById(id);

        if (alunoOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Aluno alunoExistente = alunoOptional.get();

        if (aluno.getNome() != null) {
            alunoExistente.setNome(aluno.getNome());
        }
        if (aluno.getEmail() != null) {
            alunoExistente.setEmail(aluno.getEmail());
        }

        Aluno alunoAtualizado = service.update(alunoExistente);
        return ResponseEntity.status(202).body(alunoAtualizado);
    }
}

