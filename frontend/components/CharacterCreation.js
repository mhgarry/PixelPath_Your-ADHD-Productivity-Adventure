'use client';

import { useEffect, useRef, useState } from 'react';
import * as Phaser from 'phaser';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function PhaserGame() {
  const gameRef = useRef(null);
  const [selectedSkinTone, setSelectedSkinTone] = useState('body_male_amber');
  const [selectedHair, setSelectedHair] = useState('red_hair_messy');
  const [selectedClothes, setSelectedClothes] = useState('tshirt_black');
  const [selectedEyes, setSelectedEyes] = useState('eyes_blue');

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'phaser-game',
      scene: {
        preload,
        create,
        update,
      },
      debug: true,
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    return () => {
      game.destroy(true);
    };
  }, [selectedSkinTone, selectedHair, selectedClothes, selectedEyes]);

  function preload() {
    console.log('Preloading assets...');
    this.load.spritesheet('base', `/assets/base/${selectedSkinTone}.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet('hair', `/assets/hair/${selectedHair}.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet('clothes', `/assets/clothes/${selectedClothes}.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet('eyes', `/assets/eyes/${selectedEyes}.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  function create() {
    console.log('Creating sprites...');
    this.base = this.add.sprite(400, 300, 'base', 0);
    this.hair = this.add.sprite(400, 300, 'hair', 0);
    this.clothes = this.add.sprite(400, 300, 'clothes', 0);
    this.eyes = this.add.sprite(400, 300, 'eyes', 0);

    this.base.play('rotate');
  }

  function update() {
    console.log('Updating textures...');
    this.base.setTexture('base');
    this.hair.setTexture('hair');
    this.clothes.setTexture('clothes');
    this.eyes.setTexture('eyes');
  }

  const saveCharacter = async () => {
    const characterData = {
      skintone: selectedSkinTone,
      hair: selectedHair,
      clothes: selectedClothes,
      eyes: selectedEyes,
    };

    try {
      const response = await fetch(`${apiUrl}/api/character/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };

  return (
    <div className="w-full bg-blue">
      <div id="phaser-game" />
      <div>
        <label>
          Skin Tone:
          <select
            value={selectedSkinTone}
            onChange={(e) => setSelectedSkinTone(e.target.value)}
          >
            <option value="body_male_light">Light Male</option>
            <option value="body_male_amber">Amber Male</option>
            <option value="body_male_olive">Olive Male</option>
            <option value="body_male_taupe">Taupe Male</option>
            <option value="body_male_brown">Brown Male</option>
            <option value="body_male_black">Black Male</option>
            <option value="body_female_light">Light Female</option>
            <option value="body_female_amber">Amber Female</option>
            <option value="body_female_olive">Olive Female</option>
            <option value="body_female_taupe">Taupe Female</option>
            <option value="body_female_brown">Brown Female</option>
            <option value="body_female_black">Black Female</option>
          </select>
        </label>
        <label>
          Hair:
          <select
            value={selectedHair}
            onChange={(e) => setSelectedHair(e.target.value)}
          >
            <option value="red_hair_messy">Messy Red</option>
            <option value="blue_hair_messy">Messy Blue</option>
            <option value="blue_hair_shortknot">Short Knot Blue</option>
            <option value="raven_hair_shortknot">Short Knot Raven</option>
          </select>
        </label>
        <label>
          Clothes:
          <select
            value={selectedClothes}
            onChange={(e) => setSelectedClothes(e.target.value)}
          >
            <option value="tshirt_black">Black Shirt</option>
            <option value="tshirt_red">Red Shirt</option>
            <option value="blouse_black">Black Blouse</option>
            <option value="blouse_lavender">Lavender Blouse</option>
          </select>
        </label>
        <label>
          Eyes:
          <select
            value={selectedEyes}
            onChange={(e) => setSelectedEyes(e.target.value)}
          >
            <option value="eyes_blue">Blue Eyes</option>
            <option value="eyes_brown">Brown Eyes</option>
            <option value="eyes_gray">Gray Eyes</option>
            <option value="eyes_green">Green Eyes</option>
          </select>
        </label>
        <button onClick={saveCharacter}>Save Character</button>
      </div>
    </div>
  );
}
