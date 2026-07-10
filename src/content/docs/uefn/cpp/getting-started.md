---
title: Getting Started with C++
description: The role of C++ in Unreal projects.
sidebar:
  order: 1
---

# Getting Started with C++

Unreal C++ is used for performance-sensitive logic, reusable gameplay systems, engine-level integration, and APIs that Blueprints can call.

## Reflection

Unreal's reflection system exposes C++ types and members to the editor and to Blueprints.

```cpp
UCLASS()
class ATrainingActor : public AActor
{
  GENERATED_BODY()
};
```

The reflection macros are part of how Unreal connects native code to editor workflows.
