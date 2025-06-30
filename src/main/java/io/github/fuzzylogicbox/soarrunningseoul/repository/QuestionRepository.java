package io.github.fuzzylogicbox.soarrunningseoul.repository;

import io.github.fuzzylogicbox.soarrunningseoul.domain.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
}
