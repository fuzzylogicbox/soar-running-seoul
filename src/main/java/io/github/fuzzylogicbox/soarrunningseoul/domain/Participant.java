package io.github.fuzzylogicbox.soarrunningseoul.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;

@Entity
@Table(name = "participants")
@Getter
@Setter
@NoArgsConstructor
@ToString
@SuperBuilder
public class Participant extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "gender", nullable = false, length = 20)
    private String gender;

    @Column(name = "mobile", nullable = false, length = 50)
    private String mobile;

    @Column(name = "email", nullable = false, length = 255, unique = true)
    private String email;

    @Column(name = "birth", nullable = false)
    private LocalDate birth;

    @Column(name = "event_date", nullable = false, length = 100)
    private LocalDate eventDate;

    @Column(name = "status", nullable = false, length = 20)
    private String status;

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;
}
