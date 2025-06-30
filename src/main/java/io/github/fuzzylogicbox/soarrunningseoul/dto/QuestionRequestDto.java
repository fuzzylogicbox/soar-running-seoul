package io.github.fuzzylogicbox.soarrunningseoul.dto;

import io.github.fuzzylogicbox.soarrunningseoul.domain.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class QuestionRequestDto {

    private String title;
    private String name;
    private String email;
    private String password;
    private String content;
    private String status;

    public Question toEntity() {
        return Question.builder()
                .title(this.title)
                .name(this.name)
                .email(this.email)
                .content(this.content)
                .status("pending")
                .build();
    }
}
