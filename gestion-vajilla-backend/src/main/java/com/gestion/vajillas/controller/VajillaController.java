package com.gestion.vajillas.controller;

import com.gestion.vajillas.exception.ResourceNotFoundException;
import com.gestion.vajillas.model.Vajilla;
import com.gestion.vajillas.repository.VajillaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class VajillaController {

    @Autowired
    private VajillaRepository vajillaRepository;

    @GetMapping("/vajillas")
    public List<Vajilla> listarVajilla(){
        return vajillaRepository.findAll();
    }

    @PostMapping("/vajillas")
    public Vajilla guardarVajilla(@RequestBody Vajilla vajilla){
        return vajillaRepository.save(vajilla);
    }

    @GetMapping("/vajillas/{id}")
    public ResponseEntity<Vajilla> listarVajillaPorId(@PathVariable Long id){
        Vajilla vajilla = vajillaRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("La vajilla no existe"));
        return ResponseEntity.ok(vajilla);
    }

    @PutMapping("/vajillas/{id}")
    public ResponseEntity<Vajilla> actualizarVajilla(@PathVariable Long id, @RequestBody Vajilla vajillaRequest){
        Vajilla vajilla = vajillaRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("La vajilla no existe"));
        vajilla.setNombre(vajillaRequest.getNombre());
        vajilla.setDescripcion(vajillaRequest.getDescripcion());
        vajilla.setCantidad(vajillaRequest.getCantidad());

        Vajilla vajillaActualizada = vajillaRepository.save(vajilla);
        return ResponseEntity.ok(vajillaActualizada);
    }

    @DeleteMapping("/cliente/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarVajilla(@PathVariable Long id){
        Vajilla vajilla = vajillaRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("La vajilla no existe"));
        vajillaRepository.delete(vajilla);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
