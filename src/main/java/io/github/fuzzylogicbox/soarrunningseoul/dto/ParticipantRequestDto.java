package io.github.fuzzylogicbox.soarrunningseoul.dto;

import io.github.fuzzylogicbox.soarrunningseoul.domain.Participant;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ParticipantRequestDto {

    private LocalDate eventDate;

    private String name;

    private String gender;

    private String mobile;

    private String email;

    private LocalDate birth;

    public Participant toEntity() {

        return Participant.builder()
                .eventDate(this.eventDate)
                .name(this.name)
                .gender(this.gender)
                .mobile(this.mobile)
                .email(this.email)
                .birth(this.birth)
                .status("pending")
                .build();
    }
}
