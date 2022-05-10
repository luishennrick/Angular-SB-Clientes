package com.luishennrick.clientes;

import com.luishennrick.clientes.model.entity.Cliente;
import com.luishennrick.clientes.model.entity.ServicoPrestado;
import com.luishennrick.clientes.model.repository.ClienteRepository;
import com.luishennrick.clientes.model.repository.ServicoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ClientesApplication {

	

	public static void main(String[] args) {
		SpringApplication.run(ClientesApplication.class, args);
	}
    
	

}
