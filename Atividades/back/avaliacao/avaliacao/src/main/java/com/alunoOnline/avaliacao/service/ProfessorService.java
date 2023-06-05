package com.alunoOnline.avaliacao.service;

import com.alunoOnline.avaliacao.model.Aluno;
import com.alunoOnline.avaliacao.model.Professor;
import com.alunoOnline.avaliacao.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {

    @Autowired
    ProfessorRepository repository;

    public Professor create(Professor professor) {
        return repository.save(professor);
    }


    public List<Professor> findAll(){
        return repository.findAll();
    }

    public Optional<Professor> findById(Long id){
        return repository.findById(id);
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }

    public Professor update(Professor professor) {
        return repository.save(professor);
    }

}
