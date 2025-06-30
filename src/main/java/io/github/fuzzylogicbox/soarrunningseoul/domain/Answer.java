package io.github.fuzzylogicbox.soarrunningseoul.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "answers")
@Getter
@Setter
@NoArgsConstructor
@ToString
@SuperBuilder
public class Answer extends BaseTimeEntity {

    @Id
    private Integer questionId;

    // 추후 Question 변수 선언 해야함.

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

}
