package io.github.fuzzylogicbox.soarrunningseoul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SoarRunningSeoulApplication {

	public static void main(String[] args) {
		SpringApplication.run(SoarRunningSeoulApplication.class, args);
	}

}
