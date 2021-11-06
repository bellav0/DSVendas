package com.projectReactJs.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.projectReactJs.dto.SaleSuccessDTO;
import com.projectReactJs.dto.SaleSumDTO;
import com.projectReactJs.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

	@Query("SELECT new com.projectReactJs.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ " FROM Sale As obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	
	@Query("SELECT new com.projectReactJs.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited),SUM(obj.deals))"
			+ " FROM Sale As obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();
}
