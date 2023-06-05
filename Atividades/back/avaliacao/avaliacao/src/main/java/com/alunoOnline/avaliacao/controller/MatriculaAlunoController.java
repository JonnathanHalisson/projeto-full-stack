package com.alunoOnline.avaliacao.controller;

import com.alunoOnline.avaliacao.model.MatriculaAluno;
import com.alunoOnline.avaliacao.model.dtos.AtualizarNotasRequestDto;
import com.alunoOnline.avaliacao.model.dtos.HistoricoAlunoDto;
import com.alunoOnline.avaliacao.service.MatriculaAlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/matricula-aluno")
public class MatriculaAlunoController {

    @Autowired
    MatriculaAlunoService service;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<MatriculaAluno> create(@RequestBody MatriculaAluno matriculaAluno) {
        MatriculaAluno matriculaAlunoCreated = service.create(matriculaAluno);

        return ResponseEntity.status(201).body(matriculaAlunoCreated);
    }

    @PatchMapping("/atualizar-notas/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarNotas(@RequestBody AtualizarNotasRequestDto atualizarNotasRequestDto,
                              @PathVariable Long id) {
        service.atualizarNotas(atualizarNotasRequestDto, id);
    }

    @PatchMapping("/atualizar-status/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarStatus(@PathVariable Long id) throws Exception {
        service.atualizarStatusParaTrancado(id);
    }

    @GetMapping("/historico-aluno/{id}")
    @ResponseStatus(HttpStatus.OK)
    public HistoricoAlunoDto historicoAluno(@PathVariable Long id) {
        return service.historicoAluno(id);
    }
}
