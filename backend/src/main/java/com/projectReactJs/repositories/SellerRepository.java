package com.projectReactJs.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectReactJs.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
