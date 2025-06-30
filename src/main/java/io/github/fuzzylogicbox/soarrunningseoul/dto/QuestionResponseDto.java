package io.github.fuzzylogicbox.soarrunningseoul.dto;

import io.github.fuzzylogicbox.soarrunningseoul.domain.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@ToString
public class QuestionResponseDto {

    private Integer id;
    private String name;
    private String title;
    private String content;
    private String status;
    private LocalDateTime createdAt;

    public QuestionResponseDto(Question question) {
        this.id = question.getId();
        this.name = question.getName();
        this.title= question.getTitle();
        this.content = question.getContent();
        this.status = question.getStatus();
        this.createdAt = question.getCreatedAt();
    }
}
