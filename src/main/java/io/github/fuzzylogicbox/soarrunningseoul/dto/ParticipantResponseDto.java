package io.github.fuzzylogicbox.soarrunningseoul.dto;

import io.github.fuzzylogicbox.soarrunningseoul.domain.Participant;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@ToString
public class ParticipantResponseDto {

    private Integer id;
    private LocalDate eventDate;
    private String name;
    private String gender;
    private String mobile;
    private String email;
    private LocalDate birth;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String notes;

    public ParticipantResponseDto(Participant participant) {
        this.id = participant.getId();
        this.eventDate = participant.getEventDate();
        this.name = participant.getName();
        this.gender = participant.getGender();
        this.mobile = participant.getMobile();
        this.email = participant.getEmail();
        this.birth = participant.getBirth();
        this.status = participant.getStatus();
        this.createdAt = participant.getCreatedAt();
        this.updatedAt = participant.getUpdatedAt();
        this.notes = participant.getNotes();
    }
}
