<?php

namespace App\Http\Controllers\api;
use App\Models\Subtheme;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\SubThemeResource;

class SubthemeController extends Controller
{

    public function index()
    {
        $subthemes = Subtheme::latest()->get();
        return SubThemeResource::collection($subthemes);
    }

    public function create(Request $request)
    {
        // Valider les données de la requête
        $request->validate([
            'name' => 'required|string',
           
            // Autres champs requis
        ]);

        // Créer un nouveau sous-thème
        $subtheme = new Subtheme();
        $subtheme->name = $request->input('name');
       
        // Assigner d'autres champs

        // Enregistrer le sous-thème dans la base de données
        $subtheme->save();

        // Retourner une réponse appropriée
        return response()->json(['message' => 'Sous-thème créé avec succès'], 201);
    }

    public function update(Request $request, $id)
    {
        // Valider les données de la requête
        $request->validate([
            'name' => 'required|string',
            // Autres champs requis
        ]);

        // Rechercher le sous-thème par son ID
        $subtheme = Subtheme::findOrFail($id);
        $subtheme->name = $request->input('name');
        // Mettre à jour d'autres champs si nécessaire

        // Enregistrer les modifications dans la base de données
        $subtheme->save();

        // Retourner une réponse appropriée
        return response()->json(['message' => 'Sous-thème mis à jour avec succès'], 200);
    }

    public function show($id)
    {
        // Rechercher le sous-thème par son ID
        $subtheme = Subtheme::findOrFail($id);

        // Retourner le sous-thème
        return response()->json($subtheme, 200);
    }

    public function destroy($id)
    {

        // Rechercher le sous-thème par son ID
        $subtheme = Subtheme::findOrFail($id);

        // Supprimer le sous-thème de la base de données
        $subtheme->delete();

        // Retourner une réponse appropriée
        return response()->json(['message' => 'Sous-thème supprimé avec succès'], 200);
    }
}