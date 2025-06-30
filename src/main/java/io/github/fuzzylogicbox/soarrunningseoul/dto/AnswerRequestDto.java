package io.github.fuzzylogicbox.soarrunningseoul.dto;

import io.github.fuzzylogicbox.soarrunningseoul.domain.Answer;
import io.github.fuzzylogicbox.soarrunningseoul.domain.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class AnswerRequestDto {

    private String content;

    // 1:1 식별 관계이므로, 연결될 Question 엔티티 객체 필요함.
    public Answer toEntity(Question question) {
        return Answer.builder()
                .questionId(question.getId())
                .question(question)
                .content(this.content)
                .build();
    }
}
