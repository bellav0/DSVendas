package com.projectReactJs.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectReactJs.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
