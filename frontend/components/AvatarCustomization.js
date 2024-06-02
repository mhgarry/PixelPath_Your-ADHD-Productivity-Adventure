'use client';
import Phaser from 'phaser';
import React, { useEffect } from 'react';

export default function AvatarCustomization() {
    useEffect() {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'avatar-customization',
            scene: {
                preload: preload,
                create: create,
                update: update,
            }
        }
        const game = new Phaser.game(config);


    }
}
