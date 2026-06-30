---
title: Actors and Components
description: The basic gameplay building blocks in Unreal Engine.
sidebar:
  order: 2
---

# Actors and Components

An actor is an object that can be placed or spawned in a level. Components add reusable behavior or data to actors.

## Example

Common actor components include meshes, collision, audio, cameras, and custom gameplay components.

```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite)
float Health = 100.0f;
```

Use actors for things that exist in the world. Use components for behavior you want to compose and reuse.
