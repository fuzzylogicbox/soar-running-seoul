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

    @OneToOne
    @MapsId
    @JoinColumn(name = "question_id")
    private Question question;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

}
