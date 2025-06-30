package io.github.fuzzylogicbox.soarrunningseoul.dto;

import io.github.fuzzylogicbox.soarrunningseoul.domain.Answer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@ToString
public class AnswerResponseDto {

    private String content;
    private LocalDateTime createdAt;

    public AnswerResponseDto(Answer answer) {
        this.content = answer.getContent();
        this.createdAt = answer.getCreatedAt();
    }
}
