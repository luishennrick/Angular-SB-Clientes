package com.luishennrick.clientes.model.repository;

import com.luishennrick.clientes.model.entity.Servico;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
    
}
