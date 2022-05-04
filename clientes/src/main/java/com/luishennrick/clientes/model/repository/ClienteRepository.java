package com.luishennrick.clientes.model.repository;

import com.luishennrick.clientes.model.entity.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    
}
