package com.shack.repository;

import com.shack.model.Vote;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VotingRepository extends CrudRepository<Vote, Long>{

    public List<Vote> findByUser(String user);

}
