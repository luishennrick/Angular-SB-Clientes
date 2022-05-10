package com.luishennrick.clientes.model.repository;

import com.luishennrick.clientes.model.entity.ServicoPrestado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServicoRepository extends JpaRepository<ServicoPrestado, Integer> {


}