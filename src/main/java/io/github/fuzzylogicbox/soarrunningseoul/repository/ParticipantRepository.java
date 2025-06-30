package io.github.fuzzylogicbox.soarrunningseoul.repository;

import io.github.fuzzylogicbox.soarrunningseoul.domain.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<Participant, Integer> {
}
