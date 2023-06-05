package com.alunoOnline.avaliacao.model.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AtualizarNotasRequestDto {
    private Double nota1;
    private Double nota2;
}
